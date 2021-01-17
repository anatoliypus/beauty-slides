import { AppType, ImgObject } from '../model/model';
import { replaceNode, replaceSlide, cloneApp } from './secondaryMethods';
import { getBase64 } from './getImageBase64';
import { init } from '../index';

export async function exportApp(app: AppType) {
    interface ImgArrObject {
        img: ImgObject;
        slideId: number;
    }

    let expApp = cloneApp(app);
    let imgArr: Array<ImgArrObject> = [];

    expApp.slides.slides.forEach((slide, index) => {
        slide.objects.forEach((slideNode) => {
            if (
                slideNode.type === 'img' &&
                slideNode.path.indexOf('.') !== -1
            ) {
                imgArr.push({ img: slideNode, slideId: index });
            }
        });
    });

    const promises = imgArr.map((imgObj) => {
        return new Promise<void>(async (resolve) => {
            imgObj.img.path = await getBase64(imgObj.img);
            resolve();
        });
    });

    await Promise.all(promises);

    for (let imgObj of imgArr) {
        let newSlide = expApp.slides.slides[imgObj.slideId];
        newSlide = replaceNode(newSlide, imgObj.img);
        expApp = {
            ...expApp,
            slides: replaceSlide(expApp.slides, newSlide)
        }
    }

    const json = JSON.stringify(expApp);
    downloadJSON(json, expApp.name);
}

function downloadJSON(json: string, fileName: string): void {
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.style.display = 'none';
    let blob = new Blob([json], { type: 'octet/stream' }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName + '.json';
    a.click();
    window.URL.revokeObjectURL(url);
}

export function importApp() {
    let input = document.createElement('input');
    input.style.display = 'none';
    input.type = 'file';
    input.onchange = () => {
        if (input.files) {
            const file = input.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string')
                    init(JSON.parse(reader.result));
            };
            reader.readAsText(file);
        }
    };
    document.body.append(input);
    input.click();
}

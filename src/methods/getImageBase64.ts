import { ImgObject } from '../model/model';

export function getImageBase64FromDialog(): Promise<string> {
    return new Promise((resolve) => {
        let input = document.createElement('input');
        input.style.display = 'none';
        input.type = 'file';
        input.onchange = () => {
            if (input.files) {
                const file = input.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    if (typeof reader.result === 'string')
                        resolve(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };
        document.body.append(input);
        input.click();
    });
}

export function getBase64(image: ImgObject): Promise<string> {
    return new Promise((resolve) => {
        let img = new Image(parseInt(image.width), parseInt(image.height));
        img.src = image.path;
        img.crossOrigin = 'Anonymous';

        img.onload = function () {
            var canvas = document.createElement('canvas'),
                ctx = canvas.getContext('2d');
            canvas.height = img.naturalHeight;
            canvas.width = img.naturalWidth;
            if (ctx) ctx.drawImage(img, 0, 0);
            var uri = canvas.toDataURL('image/png');
            resolve(uri);
        };
    });
}
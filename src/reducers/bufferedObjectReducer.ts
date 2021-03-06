import { actionType } from '../actions/actionsCreators';
import { getCurrentSlide, getSlideNode } from '../methods/secondaryMethods';
import { choosedObjectType, SlideNode, SlidesObject, SlideType } from '../model/model';

export default function bufferedObjectReducer(state: SlideNode | SlideType | null = null, action: actionType, choosedObject: choosedObjectType, slides: SlidesObject): SlideNode | SlideType | null {
    if (action.type === 'COPY_OBJECT' || action.type === 'CUT_SLIDE_NODE') {
        const slide = getCurrentSlide(slides);
        if (! slide) return state;
        if (choosedObject.id) {
            const node = getSlideNode(slide, choosedObject.id);
            if (! node) return state;
            return node;
        }
        return slide;
    }
    return state;
}
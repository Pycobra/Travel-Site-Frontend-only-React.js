import WOMEN_IMAGES_URL from "./images_url.js";
import MEN_IMAGES_URL from "./images_url2.js";
import { ImagesActionTypes } from './images_url.types';
import { genderShuffle } from './images_url.utils';


const INITIAL_STATE = {
    images_url: WOMEN_IMAGES_URL,
    currentImgurl: "",
    isFetching: false,
}

const imageUrlReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ImagesActionTypes.FETCH_IMAGES_START:
            return{
                ...state,
                isFetching: true,
            }
        case ImagesActionTypes.FETCH_IMAGES_SUCCESS:
            return{
                ...state,
                isFetching: false,
                currentImgurl: action.payload,
            }
        case ImagesActionTypes.FETCH_IMAGES_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        case ImagesActionTypes.SWITCH_GENDER_START:
            return{
                ...state,
                isFetching: true,
            }
        case ImagesActionTypes.SWITCH_GENDER_SUCCESS:
            return{
                ...state,
                isFetching: false,
                images_url: genderShuffle(action.payload, WOMEN_IMAGES_URL, MEN_IMAGES_URL),
            }
        case ImagesActionTypes.SWITCH_GENDER_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload,
            }
        default:
            return state
    }
}
 
export default imageUrlReducer;






import { ImagesActionTypes } from "./images_url.types"

export const fetchImagesStart = (className) => ({
    type: ImagesActionTypes.FETCH_IMAGES_START,
    payload: className
})
export const fetchImagesSuccess = (className) => ({
    type: ImagesActionTypes.FETCH_IMAGES_SUCCESS,
    payload: className
})
export const fetchImagesFailure = (error) => ({
    type: ImagesActionTypes.FETCH_IMAGES_FAILURE,
    payload: error
})

export const switchGenderStart = (className) => ({
    type: ImagesActionTypes.SWITCH_GENDER_START,
    payload: className
})
export const switchGenderSuccess = (className) => ({
    type: ImagesActionTypes.SWITCH_GENDER_SUCCESS,
    payload: className
})
export const switchGenderFailure = (className) => ({
    type: ImagesActionTypes.SWITCH_GENDER_FAILURE,
    payload: className
})
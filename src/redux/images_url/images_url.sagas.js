import { take, takeEvery, takeLatest, all, call, put } from "redux-saga/effects"
import { ImagesActionTypes } from "./images_url.types"
import {  
    fetchImagesSuccess,
    fetchImagesFailure,
    switchGenderSuccess,
    switchGenderFailure,
} from "./images_url.action"


export function* fetchImagesStart({payload}) {
    try{
        yield put(fetchImagesSuccess(payload))
    } catch (error){
        yield put(fetchImagesFailure(error.message))
    }
}
export function* switchGenderStart({payload}) {
    try{
        yield put(switchGenderSuccess(payload))
    } catch (error){
        yield put(switchGenderFailure(error.message))
    }
}
export function* onFetchImagesStart() {
    yield takeLatest(ImagesActionTypes.FETCH_IMAGES_START, 
        fetchImagesStart)
}
export function* onSwitchGenderStart() {
    yield takeLatest(ImagesActionTypes.SWITCH_GENDER_START, 
        switchGenderStart)
}
export function* imageSagas(){
    yield all([ 
        call(onFetchImagesStart),
        call(onSwitchGenderStart),
    ])
}



import types from '../types';
import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {setSearchResult} from '../action';

function *setSearch({value}){
    try {
        const url = `https://itunes.apple.com/search?term=${value}`;
        const data = yield axios.get(url);
        return yield put(setSearchResult(data.data.results));
    } catch (error) {
        console.log(error);
    }
}

function* watchSearch(){
    yield takeLatest(types.watchGetSearchResults, setSearch);
}

export default watchSearch;
/* eslint-disable no-unused-vars */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSREQUEST } from "./status";
import { codes } from "../../helpers/codesCountries";

const initialState = {
    data: [],
    filter: {
        name: "",
        region: "",
        filterByName: true
    },
    status: STATUSREQUEST.PENDING,
}

export const fetchData = createAsyncThunk("filter/fetchData", async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
});


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.status = STATUSREQUEST.PENDING;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                let data = action.payload;

                if (Array.isArray(data)) {
                    state.status = STATUSREQUEST.SUCCEEDED;
                    state.data = data;
                } else {
                    state.status = STATUSREQUEST.FAILED;
                }

            })
            .addCase(fetchData.rejected, (state, action) => {
                state.status = STATUSREQUEST.FAILED;
            })
    }
});

export default filterSlice.reducer;

export const { setFilter } = filterSlice.actions;

export const selectData = (state) => {
    let { data, filter } = state.filter;
    let { name, region, filterByName } = filter;

    if (data.lenght == 0) return;

    let dataTemp = [];

    if (name == "" && region == "") {
        dataTemp = data;
    } else {

        dataTemp =
            filterByName ?
                data.filter(el => el.name.common.toLowerCase().includes(name.toLowerCase())) :
                data.filter(el => el.region.toLowerCase() == region);
    }

    return dataTemp;


}

export const selectStatus = (state) => {
    let { status } = state.filter;
    return status;
}

export const selectCodes = (state) => {
    let { data } = state.filter;
    return codes(data);
}
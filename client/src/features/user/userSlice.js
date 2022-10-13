import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const getUsers = createAsyncThunk('users/getAll',
    async () => {
        const response = await fetch(`${process.env.REACT_APP_URL}/users`);
        return response.json()

    }
);

export const getUser = createAsyncThunk('users/getById',
    async (id) => {
        const response = await fetch(`${process.env.REACT_APP_URL}/users/${id}`)
        return response.json()
    }
)

export const deleteUsers = createAsyncThunk('users/delete',
    async (id) => {
        const response = await fetch(`${process.env.REACT_APP_URL}/users/${id}`, {
            method: "DELETE"
        });
        return response.json();

    }
);

export const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(deleteUsers.fulfilled, (state, action) => {
                state.data = state.data.filter(({ id }) => {
                    return id !== action.payload.id
                })
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.data = action.payload
            } )
    }
})

export default userSlice.reducer
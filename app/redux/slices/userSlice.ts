import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";
import { UserRegisterData } from "@/app/types/register.type";

type UsersState = {
	loading: boolean;
	error: string | null;
};

const initialState: UsersState = {
	loading: false,
	error: null,
};

export const createUser = createAsyncThunk("users/create", async (data: UserRegisterData, { rejectWithValue }) => {
    try {
        const res = await api.post("/users", data);
		return res.data;
    } catch (err: any) {
        console.log(err,"error")
        return rejectWithValue(err.response?.data?.message || "User register failed");
    }
})

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        
    },
	extraReducers: (builder) => {
        builder
        .addCase(createUser.pending, (state) => {
            state.loading = true;
        })
        .addCase(createUser.fulfilled, (state, action) => {
            state.loading = false;
        })
        .addCase(createUser.rejected, (state, action:any) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export default usersSlice.reducer;
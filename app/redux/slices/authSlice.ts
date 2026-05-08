import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "@/lib/axios";

type User = {
	id: number;
	name: string;
	email: string;
	role: "user" | "admin";
};

type LoginData = {
	email: string;
	password: string;
};

type AuthState = {
	user: User | null;
	token: string | null;
	loading: boolean;
	error: string | null;
};

const initialState: AuthState = {
	user: null,
	token: null,
	loading: false,
	error: null,
};

export const loginUser = createAsyncThunk("auth/loginUser", async (data: LoginData, { rejectWithValue }) => {
    try {
		const res = await api.post("/auth/login", data);
		return res.data;
    } catch (err: any) {
		return rejectWithValue(err.response?.data?.message || "Login failed");
    }
});

export const logoutUser = createAsyncThunk("auth/logoutUser", async () => {
	await api.post("/logout");
});

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		clearAuth: (state) => {
			state.user = null;
			state.token = null;
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
		// login
		.addCase(loginUser.pending, (state) => {
			state.loading = true;
		})
		.addCase(loginUser.fulfilled, (state, action) => {
			console.log(action,"::action")
			state.loading = false;
			state.user = action.payload.user;
			state.token = action.payload.token;
			localStorage.setItem("token", action.payload.token);
			localStorage.setItem("user", JSON.stringify(action.payload.user));
		})
		.addCase(loginUser.rejected, (state, action: any) => {
			state.loading = false;
			state.error = action.payload;
		})

		.addCase(logoutUser.fulfilled, (state) => {
			state.user = null;
			state.token = null;
			localStorage.removeItem("token");
		});
	},
});

export const { clearAuth } = authSlice.actions;
export default authSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@root/axiosConfig';
import Project from '@interfaces/Project';

export const fetchProjectsDb = createAsyncThunk (
    'prefetch/db',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/v1/projects/db');
            thunkAPI.dispatch(setLoadedFromDb(response.data.data.length));
            return response.data.reverse();
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: (error as Error).message });
        }
    }
)

export const fetchProjectsRedis = createAsyncThunk (
    'prefetch/redis',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/api/v1/projects/redis');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: (error as Error).message });
        }
    }
)

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        loading : false,
        loadedFromDb: 0,
        projects: { data: null } as unknown as {
                    data: Project[]
                },
        selectedProject: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
        setSelectedProject: (state, action) => {
            state.selectedProject = action.payload;
        },
        setLoadedFromDb: (state, action) => {
            state.loadedFromDb = action.payload;
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchProjectsDb.fulfilled, (state, action) => {
            state.projects = action.payload;
            state.loadedFromDb = action.payload.data.length;
        })
        .addCase(fetchProjectsDb.rejected, (action) => {
            console.log(action.payload);
        })
        .addCase(fetchProjectsRedis.fulfilled, (state, action) => {
            state.projects = action.payload;
        })
        .addCase(fetchProjectsRedis.rejected, (action) => {
            console.log(action.payload);
        })
    }
});

export const { setLoading, setProjects, setSelectedProject, setLoadedFromDb } = projectSlice.actions;
export default projectSlice.reducer;
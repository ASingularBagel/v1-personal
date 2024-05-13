import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './features/theme/themeSlice';
import locationReducer from './features/location/locationSlice';
import uiReducer from '@redux/features/ui/uiSlice';
import projectReducer from '@redux/features/projects/projectSlice'

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        location: locationReducer,
        ui: uiReducer,
        project: projectReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

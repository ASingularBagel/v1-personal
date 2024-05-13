import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from '@redux/features/theme/themeSlice';
import locationReducer from '@redux/features/location/locationSlice';
import uiReducer from '@redux/features/ui/uiSlice';
import projectReducer from '@redux/features/projects/projectSlice'

const rootReducer = combineReducers({
    theme: themeReducer,
    location: locationReducer,
    ui: uiReducer,
    projects: projectReducer,
});

export default rootReducer;
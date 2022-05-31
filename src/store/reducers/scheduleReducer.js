import locale from '../../localization'

const initialState = {
    title: locale.title.schedule,
}

export const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

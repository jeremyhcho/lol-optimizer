const nullCurrentSection = {
  currentSection: 'SLATES'
}

const CurrentSectionReducer = (state = nullCurrentSection, action) => {
  switch (action.type) {
    case 'SELECT_SECTION':
      return { ...state, currentSection: action.sectionName.toUpperCase() }

    default:
      return state;
  }
}

export default CurrentSectionReducer

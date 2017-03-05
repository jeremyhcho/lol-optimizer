const nullCurrentSection = {
  currentSection: 'SLATES'
}

const CurrentSectionReducer = (state = nullCurrentSection, action) => {
  switch (action.type) {
    case 'SECTION_SELECTED':
      return { ...state, currentSection: action.sectionName.toUpperCase() }

    default:
      return state;
  }
}

export default CurrentSectionReducer;

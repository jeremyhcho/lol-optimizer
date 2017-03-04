const nullCurrentSection = {
  currentSection: 'Home'
}

const currentSectionReducer = (state = nullCurrentSection, action) => {
  switch (action.type) {
    case 'SECTION_SELECTED':
      return { ...state, currentSection: action.sectionName }

    default:
      return state;
  }
}

export default currentSectionReducer;

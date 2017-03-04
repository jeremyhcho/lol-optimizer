const currentSectionReducer = ( state={ currentSection:"Home" }, action) => {
  switch(action.type){
    case 'SECTION_SELECTED':
     return Object.assign({}, state, {
       currentSection:action.sectionName
     })
  }
  return state;
}

export default currentSectionReducer;

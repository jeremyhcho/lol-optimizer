export const CurrentSectionConstants = {
  SELECT_SECTION: 'SELECT_SECTION'
}

export const selectSection = (sectionName) => ({
  type: CurrentSectionConstants.SELECT_SECTION,
  sectionName
})
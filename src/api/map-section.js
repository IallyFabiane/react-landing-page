export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section._component === 'section.section-two-coloumns') {
      return mapSectionTwoColumns(section);
    }

    if (section._component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section._component === 'section.section-grid') {
      return mapSectionGrid(section);
    }

    return section;
  });
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    _component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = ''} = false,
  } = section;
  return {
    component,
    title,
    text,
    srcImg,
    background,
    sectionId,
  };
};

export const mapSectionContent = (section) => {
  return section;
};

export const mapSectionGrid = (section) => {
  return section;
};

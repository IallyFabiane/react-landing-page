export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section._component === 'section.section-two-coloumns') {
      return mapSectionTwoColumns(section);
    }

    if (section._component === 'section.section-content') {
      return mapSectionContent(section);
    }

    if (section._component === 'section.section-grid') {
      const {__component: { text_grid = [], image_grid = []} = ''} = section

      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
       }
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
    metadata: { background = false, section_id: sectionId = '' } = false,
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

export const mapSectionContent = (section = {}) => {
  const {
    _component: component = '',
    title = '',
    // eslint-disable-next-line no-unused-vars
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component,
    title,
    background,
    sectionId,
    html,
  };
};

export const mapSectionTwoColumns = (section = {}) => {
  const {
    _component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
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

export const mapTextGrid = (section = {}) => {
  const {
    _component: component = '',
    title = '',
    content: html = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
  } = section;
  return {
    component: 'section.section-grid-text',
    title,
    background,
    sectionId,
    html,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: { background = false, section_id: sectionId = '' } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    background,
    sectionId,
    description,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;
      return {
        srcImg,
        altText,
      };
    }),
  };
};

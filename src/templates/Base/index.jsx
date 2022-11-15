import { Menu } from '../../components/Menu';
import P from 'prop-types';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';
import * as Styled from './styles';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node,
  ...Menu.propTypes,
  footerHtml: P.string,
};

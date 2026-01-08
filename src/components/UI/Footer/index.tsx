import Image from 'next/image';
import raft_footer_logo from '../../../../public/svgs/ssd_logo.png';
import ic_chevron_down from '../../../../public/svgs/ic_chevron_down.svg';
import ic_copyright from '../../../../public/svgs/ic_copyright.svg';

const linksArr = [
  {
    title: 'Contact Us',
    links: ['Email: pt.swadharmasanggabuana@yahoo.co.id', 'Telepon: (021) 75905824'],
  },

];


import {
  Wrapper,
  Inner,
  FooterMainContent,
  FooterMiddle,
  QRContainer,
  QRImageCtn,
  TextCtn,
  FooterNavigation,
  GridColumn,
  LinksContainer,
  FooterBottom,
  Translator,
  CopyRight,
} from './styles';

const Footer = () => {
  return (
    <Wrapper>
      <Inner>
        <FooterMainContent>
          <FooterMiddle>
            <QRContainer>
              <QRImageCtn>
                <Image src={raft_footer_logo}
                  alt="raft_footer_logo"
                  width={60}
                  height={60}
                  className="w-16 h-auto" />
              </QRImageCtn>
              <TextCtn>
                <p>PT. Swadharma Sangga Buana.
                  <br></br>
                  Gedung Yayasan Danar Dana Swadharma
                  Jl. RS Fatmawati D3/115 RT.004/RW.004 Kel.Cilandak Barat,
                  Kecamatan Cilandak, Jakarta Selatan 12430
                </p>
              </TextCtn>
            </QRContainer>
            <FooterNavigation>
              {linksArr.map((l, i) => (
                <GridColumn key={i}>
                  <h3>{l.title}</h3>
                  <LinksContainer>
                    {l.links.map((link, i) => (
                      <li key={i}>{link}</li>
                    ))}
                  </LinksContainer>
                </GridColumn>
              ))}
            </FooterNavigation>
          </FooterMiddle>
          <FooterBottom>
            <Translator>
              <h3>Swadharma Sangga Buana (SSB)</h3>
              <Image src={ic_chevron_down} alt="chevron down" />
            </Translator>
            <CopyRight>
              <Image src={ic_copyright} alt="copyright svg" />
              <span>By Peristiwa Kreatif Nusantara</span>
            </CopyRight>
          </FooterBottom>
        </FooterMainContent>
      </Inner>
    </Wrapper>
  );
};

export default Footer;

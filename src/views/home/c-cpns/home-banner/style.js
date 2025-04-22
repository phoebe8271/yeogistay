import styled from 'styled-components'
import homeBannerImg1 from '@/assets/img/homebanner-1.avif'

export const BannerWrapper = styled.div`
  width: 100%;
  height: 529px;
  background: url(${homeBannerImg1}) center center / cover no-repeat;

  .banner-content {
    max-width: 1120px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;
    padding-left: 40px;
    color: #fff;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);

    .title {
      font-size: 36px;
      font-weight: 800;
      margin-bottom: 12px;
    }

    .subtitle {
      font-size: 30px;
      font-weight: 800;
    }
  }
`
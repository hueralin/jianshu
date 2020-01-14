import styled from 'styled-components'

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    // 触发BFC（因为子元素浮动，我们要让父元素感知到整体的高度）
    overflow: hidden;
`;
export const HomeLeft = styled.div`
    width: 625px;
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;
export const HomeRight = styled.div`
    width: 240px;
    float: right;
`;
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -20px;
`;
export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 20px;
    margin-bottom: 20px;
    padding-right: 10px;
    background: #f7f7f7;
    img {
        width: 32px;
        height: 32px;
        float: left;
        margin-right: 10px;
    }
`;

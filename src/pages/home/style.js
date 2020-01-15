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
    width: 280px;
    float: right;
`;
export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -20px;
    border-bottom: 1px solid #dcdcdc;
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

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    img {
        float: right;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    float: left;
    width: 500px;
    h3 {
        font-size: 18px;
        line-height: 27px;
        font-weight: bold;
        color: #333;
    }
    p {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWraper = styled.div`
    width: 280px;
    margin: 30px 0;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
`;

export const LoadMore = styled.div`
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    cursor: pointer;
    margin: 30px 0;
    font-size: 15px;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 60px;
    bottom: 60px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border: 1px solid #ccc;
    font-size: 14px;
    cursor: pointer;
    background: #eee;
    border-radius: 10px;
    &:hover {
        background: #fff;
    }
`;

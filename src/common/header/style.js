import styled from 'styled-components'
import logo from '../../static/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    title: '简书'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
        .iconAa {
            font-size: 20px;
        }
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const SearchWrapper = styled.div`
    float: left;
    position: relative;
    .iconfangdajing {
        position: absolute;
        right: 5px;
        bottom: 4px;
        line-height: 30px;
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        cursor: pointer;
        &.focused {
            color: #fff;
            background: #999;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    border: none;
    font-size: 14px;
    outline: none;
    border-radius: 19px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 35px 0 20px;
    box-sizing: border-box;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        width: 160px;
        transition: all 0.5s;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        width: 240px;
        transition: all 0.5s;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const HotSearch = styled.div`
    position: absolute;
    top: 58px;
    width: 240px;
    box-sizing: border-box;
    margin-left: 20px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    &::before {
        content: '';
        position: absolute;
        top: -19px;
        border-width: 10px;
        border-style: solid;
        border-color: transparent transparent #fff transparent;
    }
`;

export const HotSearchTitle = styled.div`
    color: #969696;
    line-height: 20px;
    font-szie: 14px;
    margin-top: 20px;
    margin-bottom: 15px;
`;

export const HotSearchSwitch = styled.div`
    color: #969696;
    float: right;
    font-szie: 10px;
    cursor: pointer;
    .iconspin {
        display: inline-block;
        font-size: 12px;
        margin-right: 2px;
        transition: all 0.2s;
        // transform: rotate(0deg);
        // 设置旋转中心
        transform-origin: center center;
    }
`;

export const HotSearchList = styled.div`
    // overflow: hidden;
`;

export const HotSearchItem = styled.a`
    float: left;
    display: inline-block;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 10px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    cursor: pointer;
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    border-radius: 19px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    border: 1px solid #ec6149;
    font-size: 14px;
    cursor: pointer;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
        .iconyumaobi {
            padding-right: 5px;
        }
    }
`;

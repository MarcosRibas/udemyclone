import React from 'react'
import styled from 'styled-components'
import SearchCoursesMenubar from './searchcoursesmenubar'
import {Heart} from '@styled-icons/boxicons-regular/Heart'
import {ShoppingCartOutline} from '@styled-icons/evaicons-outline/ShoppingCartOutline'
import {Bell} from '@styled-icons/boxicons-regular/Bell'


const TopMenuBarUpWrapper = styled.div`
    height: 72px;
    border-bottom: 1px solid #D1D7DB;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px;
`

const TopMenuBarLogo = styled.img`
    height: 34px;
    margin-right: 8px;
`

const TopMenuBarItem = styled.a`
    color:#1c1d1f;
    font-weight: 400;
    line-height: 1.4;
    font-size: 1.4rem;
    margin: 0px 12px;
    &:hover {
    color: #5624D0; // <Thing> when hovered
  }

`

const MenuHeart = styled(Heart)`
    height: 24px;
    margin: 0px 12px;
`

const MenuShoppingCartOutline = styled(ShoppingCartOutline)`
    height: 24px;
    margin: 0px 12px;
`

const MenuBell = styled(Bell)`
    height: 24px;
    margin: 0px 12px;
`

const UserCircleButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin: 0px 8px;
    border-radius: 100%;
    background: black;
    color: white;
    font-size: 1.4rem;
    font-weight: 700;

`

export default function TopMenubarUp() {
    return (
        <TopMenuBarUpWrapper>
            <TopMenuBarLogo src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"></TopMenuBarLogo>
            <TopMenuBarItem>Categorias</TopMenuBarItem>
            <SearchCoursesMenubar></SearchCoursesMenubar>
            <TopMenuBarItem>Udemy Business</TopMenuBarItem>
            <TopMenuBarItem>Ensine na Udemy</TopMenuBarItem>
            <TopMenuBarItem>Meu Aprendizado</TopMenuBarItem>
            <MenuHeart></MenuHeart>
            <MenuShoppingCartOutline></MenuShoppingCartOutline>
            <MenuBell></MenuBell>
            <UserCircleButton>LC</UserCircleButton>
        </TopMenuBarUpWrapper>
    )
}

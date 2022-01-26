import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarOptions from "./SidebarOptions";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import {useCollection} from "react-firebase-hooks/firestore";
import {auth, db} from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const SideBar = () => {

    const [channels] = useCollection(db.collection('rooms'));

    const [user] = useAuthState(auth);

    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>
                        {user.displayName}
                    </h2>
                    <h3>
                        <FiberManualRecordIcon />
                        DimidrouPa
                    </h3>
                </SidebarInfo>
                
            </SidebarHeader>

            <SidebarOptions Icon={InsertCommentIcon} title="Threads"/>
            <SidebarOptions Icon={InboxIcon} title="Mentions & reactions"/>
            <SidebarOptions Icon={DraftsIcon} title="Saved items"/>
            <SidebarOptions Icon={BookmarkBorderIcon} title="Channel browser"/>
            <SidebarOptions Icon={PeopleAltIcon} title="People & user groups"/>
            <SidebarOptions Icon={AppsIcon} title="Apps"/>
            <SidebarOptions Icon={FileCopyIcon} title="File browser"/>
            <SidebarOptions Icon={ExpandLessIcon} title="Show less"/>
            <hr />
            <SidebarOptions Icon={ExpandMoreIcon} title="Channels" />
            <hr />
            <SidebarOptions Icon={AddIcon} addChannelOption title="Add Channel" />

            {channels?.docs.map(doc => (
                <SidebarOptions 
                key={doc.id} 
                id={doc.id}
                title={doc.data().name} 
                />
            ))}
        </SidebarContainer>
    )
}

export default SideBar

const SidebarContainer = styled.div`
    background-color: var(--slack-color);
    color: #fff;
    flex: 0.3;
    border: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
    > hr {
        margin-top: 10px;
        margin-bottom: 10px;
        border: 1px solid #49274d;
    }
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding-bottom: 10px;
    padding: 13px;
    > .MuiSvgIcon-root{
        padding: 8px;
        color: #49294b;
        font-size: 18px;
        background-color: #fff;
        border-radius: 999px;
    }
`;

const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }
    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
        > .MuiSvgIcon-root {
            font-size: 14px;
            margin-top: 1px;
            margin-right: 2px;
            color: green;
        }
    }
`;

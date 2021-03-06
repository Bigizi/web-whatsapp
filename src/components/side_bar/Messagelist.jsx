import { Avatar } from '@mui/material';
import React, { Component } from 'react'
import './messagestyle.css';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import ChatListItems from './ChatListItems';

export default class MessageList extends Component {
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://pbs.twimg.com/profile_images/1055263632861343745/vIqzOHXj.jpg",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    // {
    //   image:
    //     "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
    //   id: 7,
    //   name: "Hasan Mcculloch",
    //   active: false,
    //   isOnline: true,
    // },
    // {
    //   image:
    //     "https://auraqatar.com/projects/Anakalabel/media//vesbrand/designer4.jpg",
    //   id: 8,
    //   name: "Autumn Mckee",
    //   active: false,
    //   isOnline: false,
    // },
    // {
    //   image:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
    //   id: 9,
    //   name: "Allen Woodley",
    //   active: false,
    //   isOnline: true,
    // },
    // {
    //   image: "https://pbs.twimg.com/profile_images/770394499/female.png",
    //   id: 10,
    //   name: "Manpreet David",
    //   active: false,
    //   isOnline: true,
    // },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render(){
  return (
    <div className='sidebar'>

      <div className='side-header'>
        <Avatar />
      <div className='side-header-right'>
        <DonutLargeIcon />
        <ChatIcon />
        <MoreVertIcon />
      </div>
      </div> 
      <div className='search'>
        <div className='search-container'>
      <SearchIcon />
      <input type='text' placeholder="Search" />
      </div>
      </div>
      <div className='chat-list'>
      {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  )
  }
}

import React, { useEffect } from 'react';
import Sidebar from 'react-sidebar'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationArrow, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './RightSideProfile.css';
import dummy from './ElizabethNelson.png'
import CloseIcon from '@material-ui/icons/Close';
import { AttachFile } from '@material-ui/icons';
import { Avatar, IconButton } from '@material-ui/core';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import LeftSideContact from '../LeftSideContact/LeftSideContact';
import ChatDiv from '../ChatDiv/ChatDiv';

function App() {
  return (
    <MainContainer />

  );
}


function LeftSide() {
  return (
    <div style={{ height: '100vh', width: '35%', backgroundColor: 'blue' }}>

    </div>
  )
}


class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
  }

  componentDidMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
  closeSideBar(close) {
    this.setState({ sidebarOpen: close })
  }
  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches });

  }


  render() {
    return (

      <div>

        <Sidebar
          sidebar={<LeftSideContent close={this.closeSideBar} />}
          open={this.state.sidebarOpen}
          onSetOpen={this.onSetSidebarOpen}
          docked={this.state.sidebarDocked} // for mobile design make it false
          pullRight
          shadow={false}
          styles={{
            sidebar: { minWidth: '375px', width: '25%', background: 'white', boxShadow: "10px 0 5px 12px #888" },
            content: { overflow: 'hidden' }
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="Show"><LeftSideContact /></div>
            <MidContainer openSidebar={this.onSetSidebarOpen} />
          </div>
        </Sidebar>
      </div>
    );
  }
}
function MidContainer({ openSidebar }) {

  useEffect(() => {

    var objDiv = document.querySelector(".chat_body");
    objDiv.scrollTop = objDiv.scrollHeight;

  }, [])

  return (
    <div className='chat' style={{ height: '100vh' }} >
      {/* <div className='chat_header'> */}
      <div onClick={() => openSidebar(true)} >
        <ChatDiv />
      </div>
      {/* <div className='chat_headerInfo'>
             <h3 className='chat-name' onClick={() =>openSidebar(true)}>Elizabeth Nelson</h3>  
         </div>
         <div className="chat_headerRight">
             <IconButton>
                <PhoneOutlinedIcon/>
             </IconButton>
            
             <IconButton>
                <VideocamOutlinedIcon/>
             </IconButton>
             
         </div> */}
      {/* </div> */}
      <div className='chat_body' >


        <div className={`chat_message ${'chat_receiver'}`}>
          <p className="message_content" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            option, eaque rerum!  ipsum debitis quas aliquid. Reprehender
               </p>
          <div className="avatar" >

            <Avatar src={dummy} />
            <span className="chat_timestemp">12:30 PM</span>
          </div>
        </div>
        <div className={`chat_message ${'chat_receiver'}`}>
          <p className="message_content" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            option, eaque rerum!  ipsum debitis quas aliquid. Reprehender
               </p>
          <div className="avatar" >

            <Avatar src={dummy} />
            <span className="chat_timestemp">12:30 PM</span>
          </div>
        </div>
        <div className={`chat_message ${'chat_sender'}`}>
          <p className="message_content" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            option, eaque rerum!  ipsum debitis quas aliquid. Reprehender
               </p>
          <div className="avatar" >

            <Avatar src={dummy} />
            <span className="chat_timestemp">12:30 PM</span>
          </div>

        </div>
        <div className={`chat_message ${'chat_sender'}`}>
          <p className="message_content" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
            numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
            option, eaque rerum!  ipsum debitis quas aliquid. Reprehender
               </p>
          <div className="avatar" >

            <Avatar src={dummy} />
            <span className="chat_timestemp">12:30 PM</span>
          </div>

        </div>


      </div>
      <div className='chat_footer'>
        <form>
          <input type="text" placeholder="Type a message" />
          {/* <InsertEmoticonIcon /> */}
          <div className="chat_footerRight" >

            <IconButton>
              < EmojiEmotionsOutlinedIcon />
            </IconButton>
            <IconButton>
              <AttachFile />
            </IconButton>
            {/* <button type="submit" ><FontAwesomeIcon icon={faLocationArrow}/></button> */}
            <IconButton type="submit" ><FontAwesomeIcon icon={faLocationArrow} /></IconButton>
          </div>
        </form>

      </div>

    </div>


  )
}

const mql = window.matchMedia(`(min-width: 1020px)`);



function LeftSideContent({ close }) {
  const media = [dummy, dummy, dummy, dummy, dummy, dummy]
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
      {!mql.matches && <div style={{ textAlign: "end" }} >
        <CloseIcon onClick={() => close(false)} />
      </div>
      }

      <div className="userName">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
          <img style={{ borderRadius: "50%", width: '70%', margin: '14px 11px' }} src={dummy} alt="" />

          <h5>Elizabeth Nelson</h5>
          <p>Founder, Avn</p>
          <p>"Bachmanity"</p>
        </div>
        <div className="userInfo">
          <p><FontAwesomeIcon icon={faMapMarkerAlt} />Manchester,England</p>
          <p><FontAwesomeIcon icon={faMobileAlt} /> 9999-9999</p>
          <p><FontAwesomeIcon icon={faEnvelope} />elezabeth@avn.com</p>
        </div>
        <div style={{ margin: "auto 7%" }}>
          <h5>Media</h5>
          <Carousel
            responsive={responsive}
          >
            {media.map((val, idx) => (
              <img style={{ height: "70px", width: '70px', borderRadius: '50%' }} src={val} alt="" key={idx} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )

}
export default App;

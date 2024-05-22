function Home() {
    return (
        <div className="HomeContainer"  >
            <h1 style={{ paddingTop: "2%", fontSize: "300px", fontWeight: "2rem" }}>Sleeve 2</h1>
            <h2 style={{ fontSize: "50px", fontWeight: "bolder" }}><b>The ultimate music accessory for your Mac.</b></h2>
            <h2>Sleeve sits on the desktop, displaying and controlling the music you’re</h2>
            <h2>currently playing in <img src="https://replay.software/sleeve/images/AppMusic.png" />Apple Music, <img src="https://replay.software/sleeve/images/AppSpotify.png" /> Spotify, and <img src="https://replay.software/sleeve/images/AppDoppler.png" /> Doppler.</h2>
            <div>
                <button className="buttons"><i class="fa-brands fa-apple"></i> <b>Mac App Store </b></button>
                <button className="buttons" style={{ marginLeft: "10px" }}> <b>Buy Directly</b> <button style={{ borderRadius: "50px" }}> <b>$5.99</b></button></button>
            </div>
            <div>
                <h1 style={{ fontSize: "60px", fontWeight: "1rem" }}>Themes. Unlimited themes.</h1>
                <h3>Themes in Sleeve make creating and switching between customizations easy. Share your own creations with friends and install as many themes as you like with just a double-click.</h3>
                <div className="image-content" >
                    <div className="image-card-content">
                        <img src="https://i.pinimg.com/736x/c3/7a/f1/c37af139600de0ed5d5a89543830ea79.jpg" width="200px" height="200px" /><br></br>
                        <b>Eternal Sunshine</b><h5> Forgotten Feels</h5><h6>Slow Magic</h6>
                    </div>

                    <div className="image-card-content">
                        <img src="https://i.ytimg.com/vi/zHro3kno7os/sddefault.jpg" width="200px" height="200px" /><br></br><i class="fa-solid fa-backward-step"></i> <i class="fa-solid fa-pause"></i> <i class="fa-solid fa-forward-step"></i><h6>Are You Listening
                            How To Be Human
                            Chelsea Cutler</h6>
                    </div>
                    <div className="image-card-content">
                        <img src="https://i.ytimg.com/vi/LdlC3XLRiRE/maxresdefault.jpg" width="200px" height="200px" /><h6><b>Creation Comes Alive</b></h6>
                        <h6>Petit Biscuit</h6>
                    </div>
                </div>


                <div className="textcontent">
                    <div className="textcardcontainer">
                        <div className="textcard">
                            <div>
                                <h4><b>Change it up</b></h4>
                                <h6> Switch between themes with just a click.</h6>

                                <h6>Modify the built-in themes or create your own using Sleeve’s extensive preferences.</h6>
                            </div>
                            <div>
                                <img src="https://replay.software/sleeve/images/ThemeUIDark.png" className="musicimg"></img>
                                <img src="https://replay.software/sleeve/images/ThemeUIActiveDark.png" className="musicimg1" ></img>
                            </div>
                        </div>

                    </div>
                    <div className="textcardcontainer">
                        <div className="textcard">
                            <div>
                                <h4>
                                    <b>Shareable</b> </h4>
                                <h6>Export your themes and share them with friends using the handy new Sleeve Theme file format.</h6>

                                <h6>Install themes from anywhere with a double-click or a drag and drop.</h6>
                            </div>
                            <div>
                                <img src="https://replay.software/sleeve/images/ThemeExportDark.png" width={"200px"} height={"200px"} ></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div>

                </div>

            </div>
            <div >
                <h1 style={{ fontSize: "80px", fontWeight: "1rem" }}><b>Countless ways to customize.</b></h1>
                <h2>Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.</h2>
                <div className="customize-image-section">
                    <img src="https://replay.software/sleeve/images/IconArrayHotkeys.png" />
                    <img src="https://replay.software/sleeve/images/IconArrayWindow.png" />
                    <img src="https://replay.software/sleeve/images/IconArrayInterface.png" />
                    <img src="https://replay.software/sleeve/images/IconArrayLayout.png" />
                    <img src="https://replay.software/sleeve/images/IconArrayTheme.png" />
                    <img src="https://replay.software/sleeve/images/IconArrayTrack.png" />
                    <img src="https://replay.software/sleeve/images/IconArrayPosition.png" />
                    <img src="https://replay.software/sleeve/images/IconArrayArtwork.png" />
                    <img src="https://replay.software/sleeve/images/IconArraySettings.png" />
                </div>

            </div>
            <div className="headingcontainer">
                <div>
                    <img src="https://replay.software/sleeve/images/IconArrayArtworkDark.png"></img>
                    <h2><b>Artwork</b></h2>
                    <h4>Scale artwork all the way up or all the way down. Round the corners or leave them square.</h4><br />
                    <h4>Choose shadow and lighting effects to bring your album artwork to life.</h4><br />
                    <h4>Or hide it completely.</h4>
                </div>
                <div className="artworkimg">
                    <img src="https://replay.software/sleeve/images/Artwork1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                    <img src="https://replay.software/sleeve/images/Artwork2Dark.jpg" style={{ borderRadius: "30px" }}></img>
                    <img src="https://replay.software/sleeve/images/Artwork3Dark.jpg" style={{ borderRadius: "30px" }}></img>
                </div>
            </div>
            <div className="headingcontainer">
                <div>
                    <img src="https://replay.software/sleeve/images/IconArrayTrack.png"></img>
                    <h2><b>Typography</b></h2>
                    <h4>Pick the track info you want to display, and then exactly how to display it.</h4><br />
                    <h4>Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.

                    </h4>

                </div>
                <div className="artworkimg">
                    <img src="https://replay.software/sleeve/images/Typography1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                    <img src="https://replay.software/sleeve/images/Typography2Dark.jpg" style={{ borderRadius: "30px" }}></img>

                </div>
            </div>
            <div className="headingcontainer">
                <div>
                    <img src="https://replay.software/sleeve/images/IconInterface.png"></img>
                    <h2><b>Interface</b></h2>
                    <h4>Customize the layout, alignment and position to fit your setup.</h4><br />
                    <h4>Show and hide playback controls. Add a backdrop layer and customize it.

                    </h4>

                </div>
                <div className="artworkimg">
                    <img src="https://replay.software/sleeve/images/Interface1Dark.jpg" style={{ borderRadius: "30px" }}></img>
                    <img src="https://replay.software/sleeve/images/Interface2Dark.jpg" style={{ borderRadius: "30px" }}></img>

                </div>
            </div>
            <div>
                <h1 style={{ fontSize: "90px", fontWeight: "1rem", marginTop: "3%" }}><b>Like, Scrobble.</b></h1>
                <div className="textcontent">
                    <div className="textcardcontainer1">
                        <div className="textcard1">
                            <div>
                                <img src="https://replay.software/sleeve/images/IntegrationLastfmDark.png"></img>
                            </div>
                            <div>
                                Sleeve integrates with Last.<br />fm so you never miss a track.<br /> Simply sign in and start scrobbling.
                                Last.fm account required
                            </div>
                        </div>
                    </div>
                    <div className="textcardcontainer1" style={{ backgroundColor: "lightblue" }}>
                        <div className="textcard1">
                            <div>
                                <img src="https://replay.software/sleeve/images/IntegrationSpotifyDark.png"></img>
                            </div>
                            <div style={{ color: "black" }}>
                                With Sleeve 2 you can now like<br />tracks in Spotify, without ever<br /> having to switch away from Sleeve.
                                A free Spotify Developer account is required
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>






    )
}

export default Home
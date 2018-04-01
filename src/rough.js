























  <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading text-uppercase">About</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <ul class="timeline">
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="1.jpg" alt=""/>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>2009-2011</h4>
                  <h4 class="subheading">Our Humble Beginnings</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="2.jpg" alt=""/>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>March 2011</h4>
                  <h4 class="subheading">An Agency is Born</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li>
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="3.jpg" alt=""/>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>December 2012</h4>
                  <h4 class="subheading">Transition to Full Service</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <img class="rounded-circle img-fluid" src="4.jpg" alt=""/>
              </div>
              <div class="timeline-panel">
                <div class="timeline-heading">
                  <h4>July 2014</h4>
                  <h4 class="subheading">Phase Two Expansion</h4>
                </div>
                <div class="timeline-body">
                  <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                </div>
              </div>
            </li>
            <li class="timeline-inverted">
              <div class="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>



















  <div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">What if a camp needs to be cancelled due to low enrollment?
              </a>
          </h4>
      </div>
      <div id="collapseEleven" class="panel-collapse collapse in">
          <div class="panel-body">
          We will provide a full refund of the registration  or allow a transfer to another week if space is available and you are flexible to switch dates.


          </div>
      </div>
  </div>
  <div class="panel panel-default">
      <div class="panel-heading">
          <h4 class="panel-title">
              <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">What is your refund/cancellation policy?

  </a>
          </h4>
      </div>
      <div id="collapseEleven" class="panel-collapse collapse in">
          <div class="panel-body">
          We may cancel programs if a minimum enrollment (10) has not been achieved the week before the camp occurs. In the event that a week is cancelled, all enrollment fees will be returned.



          </div>
      </div>
  </div>


















  <div class="container">
  <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>Arthur Eiserloh</h3>
  <br/>
  <img src={arthur} class="img-circle" alt="Cinque Terre" width="304" height="236"/>
<br/>
<br/>
<h4>I am a lecturer and research associate in the Meteorology and Climate Science Department here at San Jose State University. I have a passion for all things weather-related since high school after having grown up in the hot and humid Southeastern Louisiana and experiencing the thrill of many Gulf Coast hurricanes and thunderstorms. I have 4 years experience teaching young college students, and I have assisted in various research projects with Dr. Sen Chiao in SJSU’s Center for Applied Atmospheric Research and Education Center. I earned his B.S. in Meteorology at the University of South Alabama and his M.S. in Meteorology from San Jose State University. I teach classes on Air Pollution, Introduction to Weather and Climate, and Introduction to Global Climate Change.
</h4>
</div>
<br/>
<br/>
<br/>
<br/>
<div class="container">
<h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>Terrence Mullens
</h3>
<br/>
<img src={mullens} class="img-circle" alt="Cinque Terre" width="304" height="236"/>
<br/>
<br/>
<h4>I am a Professor and Chair of the Meteorology Department at De Anza College in Cupertino, California. For as long as I can remember, I've always been fascinated about weather, especially "bad" weather; when most people are running inside to get away from a thunderstorm, I'm the one you can find going outside to see it (while staying safe, of course)! I'm also passionate about sharing the science of Global Warming and Climate Change, and how we can leave our world a better place for the next generation. In my spare time, I love train travel, bike riding, and flying remote-controlled airplanes. I'm a weather nerd in every sense of the word!
</h4>
</div>













<MuiThemeProvider>
  <AppBar
     title="Register"

   />
   <TextField
     hintText="Enter your First Name"
     floatingLabelText="First Name"
     onChange = {(event,newValue) => this.setState({first_name:newValue})}
     />
   <br/>
   <TextField
     hintText="Enter your Last Name"
     floatingLabelText="Last Name"
     onChange = {(event,newValue) => this.setState({last_name:newValue})}
     />
   <br/>
   <TextField
     hintText="Enter your Email"
     type="email"
     floatingLabelText="Email"
     onChange = {(event,newValue) => this.setState({email:newValue})}
     />
   <br/>
   <TextField
     type = "password"
     hintText="Enter your Password"
     floatingLabelText="Password"
     onChange = {(event,newValue) => this.setState({password:newValue})}
     />
   <br/>
   <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => {this.props.history.push("UploadScreen");}}/>
 </MuiThemeProvider>

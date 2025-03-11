

const Contact = () => {
  return (
    <section class="contact-layout1 pb-90">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="contact-panel p-0 box-shadow-none">
              <div class="contact__panel-info mb-30">
                <div class="contact-info-box">
                  <h4 class="contact__info-box-title">Our Location</h4>
                  <ul class="contact__info-list list-unstyled">
                    <li>
                      2307 Beverley Rd Brooklyn, New York 11226 United States.
                    </li>
                  </ul>
                </div>
                <div class="contact-info-box">
                  <h4 class="contact__info-box-title">Quick Contact</h4>
                  <ul class="contact__info-list list-unstyled">
                    <li>
                      Email:{" "}
                      <a href="mailto:Solatec@7oroof.com">Solatec@7oroof.com</a>
                    </li>
                    <li>
                      Support:{" "}
                      <a href="mailto:Solatec@7oroof.com">Solatec@7oroof.com</a>
                    </li>
                  </ul>
                </div>
                <div class="contact-info-box">
                  <h4 class="contact__info-box-title">Opening Hours</h4>
                  <ul class="contact__info-list list-unstyled">
                    <li>From Monday - Friday</li>
                    <li>8 am to 7 pm</li>
                  </ul>
                </div>
                <a href="#" class="btn btn__primary">
                  <i class="icon-arrow-right"></i>
                  <span>Request A Quote</span>
                </a>
              </div>
              <form
                method="post"
                action="assets/php/contact.php"
                id="contactForm"
                class="contact__panel-form mb-30"
              >
                <div class="row">
                  <div class="col-sm-12">
                    <h4 class="contact__panel-title">Get In Touch</h4>
                    <p class="contact__panel-desc mb-40">
                      Complete control over products allows us to ensure our
                      customers receive the best quality prices and service. We
                      take great pride in everything that we do in our factory.
                    </p>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Name"
                        id="contact-name"
                        name="contact-name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        id="contact-email"
                        name="contact-email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Phone"
                        id="contact-Phone"
                        name="contact-phone"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-sm-6 col-md-6 col-lg-6">
                    <div class="form-group">
                      <select>
                        <option value="0">Select Your services</option>
                        <option value="1">service 1</option>
                        <option value="2">service 2</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        placeholder="Additional Details!"
                        id="contact-messgae"
                        name="contact-messgae"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-sm-12 col-md-12 col-lg-12">
                    <button type="submit" class="btn btn__secondary">
                      <i class="icon-arrow-right"></i>
                      <span>Submit Request</span>
                    </button>
                    <div class="contact-result"></div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

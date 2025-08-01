import ContactPage from '../support/pageObjects/ContactPage';

describe('TC005 - Contact Us Form', () => {
  const contactPage = new ContactPage();

  it('should submit contact form successfully', () => {
    contactPage.visit();
    contactPage.fillForm('Milan QA', 'milan@example.com', 'This is a test message.');
    contactPage.submit();
    contactPage.verifySuccessMessage();
  });
});

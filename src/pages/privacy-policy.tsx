import { RootPage } from '@/components/RootPage'
import { SEO } from '@/components/SEO'
import { SubPageLayout } from '../layouts/SubPageLayout'

const content = `# IFT Studio Pte Ltd. Website - Privacy Policy

_Last updated 14 February 2024_

This Privacy Policy is intended to inform users of our approach to privacy in respect of this website (“**Website**”). In this regard, if you are visiting our Website, this Privacy Policy applies to you. 

<br/>

## **1. Who we are**

For the purposes of these Website Terms of Use, the relevant entity is IFT Studio Pte Ltd., a company duly organised and registered under the laws of Singapore, having its registered office at 160 Robinson Road, #24-09 Singapore 068914. 

Whenever we refer to “IFT”, “we”, “us” or any other similar references, we are referring to IFT Studio Pte Ltd.  

<br/>

## **2. We limit the collection and processing of personal data from your use of the Website**

We aim to limit the collection and collection and processing of personal data from users of the Website. We only collect and process certain personal data for specific purposes and where we have the legal basis to do so under applicable privacy legislation. We will not collect or process any personal data that we don’t need and where we do store any personal data, we will only store it for the least amount of time needed for the indicated purpose. 

In this regard, we collect and process the following personal data from your use of the Website:  

* **IP address**: As part of such use of the Website, we briefly process your IP address but we have no way of identifying you. We however have a legitimate interest in processing such IP addresses to ensure the technical functionality and enhance the security measures of the Website. This IP address is not stored by us over time. 

<br/>

## **3. Third party processing of personal data**

In addition to our limited and collection of personal data, third parties may collect or process personal data as a result of the Website making use of certain features or to provide certain content. To the extent you interact with such third party content or features, their respective privacy policies will apply. 

<br/>

## **4. Security measures we take in respect of the Website**

As a general approach, we take data security seriously and we have implemented a variety of security measures on the Website to maintain the safety of your personal data when you submit such information to us. 

<br/>

## **5. Exporting data outside the European Union and Switzerland**

We are obliged to protect the privacy of personal data that you may have submitted in the unlikely event that we export your personal data to places outside Singapore. This means that personal data will only be processed in countries or by parties that provide an adequate level of protection comparable to the relevant privacy legislation in Singapore. Otherwise, we will use other forms of protections, such as specific forms of contractual clauses to ensure such personal data is provided the same protection as required under such legislation. In any event, the transmission of personal data outside Singapore will always occur in conformity with applicable privacy legislation. 

<br/>

## **6. Your choices and rights**

As explained in this Privacy Policy, we limit our collection and processing of your personal data wherever possible. Nonetheless, you still have certain choices and rights in respect of the personal data which we do collect and process. As laid out in relevant privacy legislation, you have the right to:

* Ask us to correct or update your personal data (where reasonably possible);

* Ask us to remove your personal data from our systems;

* Ask us for a copy of your personal data, which may also be transferred to another data controller at your request;

* Withdraw your consent to process your personal data (only if consent was asked for a processing activity), which only affects processing activities that are based on your consent and doesn’t affect the validity of such processing activities before you have withdrawn your consent;

* Object to the processing of your personal data; and

* File a complaint with the Federal Data Protection and Information Commissioner (FDPIC), if you believe that your personal data has been processed unlawfully.

<br/>

## **7. Third party links**

On this Website, you may come across links to third party websites. These third party sites have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of these third party websites. 

<br/>

## **8. This Privacy Policy might change**

We may modify or replace any part of this Privacy Policy at any time and without notice. Please check the Website periodically for any changes. The new Privacy Policy will be effective immediately upon its posting on our Website. 

<br/>

## **9. Contact information**

To the extent that you have any questions about the Privacy Policy, please contact us please contact us at legal@free.technology.

This document is licensed under CC-BY-SA.
`

const Page = () => {
  return (
    <>
      <SEO />
      <RootPage content={content} />
    </>
  )
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SubPageLayout>{page}</SubPageLayout>
}

export default Page

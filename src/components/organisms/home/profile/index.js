import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import json from "@contents/jsons/about";
import SectionTitle from "@components/atoms/section_title";


const Section = styled.section`
  ${tw`w-full`};
`

const ProfileBlock = styled.div`
  ${tw`lg:mb-5 leading-loose`};

  & > h3 {
    ${tw`mb-3`};
  }

  & > p {
    ${tw`mb-5 text-grey-darkest text-base`};
  }

  & > dl > dt {
    ${tw`lg:float-left lg:w-1/5 font-bold`};
  }

  & > dl > dd {
    ${tw`lg:float-right lg:w-4/5 text-grey-darkest`};
  }
`
function ProfileItem(props) {
  return <><dt>{props.name}</dt><dd>{props.value}</dd></>
}

function Profile(props) {
  return (
    <dl>
      {Object.keys(props.profiles).map(key => {
        return <ProfileItem key={key} name={key} value={props.profiles[key]} />
        })}
    </dl>
  )
}

const MyProfile = () => (
  <Section>
    <InViewMonitor
      classNameNotInView='inview-section-hidden'
      classNameInView='inview-section-active'
    >
      <div className="container lg:w-2/3 mx-auto mb-20">
        <SectionTitle title="PROFILE" subtitle="プロフィール" />
        <div className="lg:flex w-full my-6">
          <div className="flex-1 px-2">
            <ProfileBlock>
              <h3>MY PROFILE</h3>
              <p>{json.myProfile.description}</p>
              <Profile profiles={json.myProfile.profile} />
            </ProfileBlock>
          </div>
        </div>
      </div>
    </InViewMonitor>
  </Section>
)

export default MyProfile
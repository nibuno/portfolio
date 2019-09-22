import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import InViewMonitor from 'react-inview-monitor';
import SectionTitle from  "@components/atoms/section_title";
import Timeline from "@components/molecules/timeline";
import json from "@contents/jsons/works";

const Section = styled.section`
  ${tw`w-full`};
`

const Works = () => (
  <Section>
    <InViewMonitor
      classNameNotInView='inview-section-hidden'
      classNameInView='inview-section-active'
    >
      <div className="container lg:w-2/3 mx-auto mb-10">
        <SectionTitle title="Work Experience" subtitle="職務経歴"  />
        <div className="pt-8">
          <p>主な経歴は下記の通りです。デザイナー・カタログ作成・カスタマーサポート・社内SEのようなことを行なっています。また、こちらに掲載していない期間に関しては、掲載している業務を中心に行なっているため割愛しています。</p>
        </div>
        <Timeline works={json} />
      </div>
    </InViewMonitor>
  </Section>
)

export default Works
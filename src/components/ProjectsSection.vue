<template>
  <section id="projects" >
    <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
      <h1>Featured Project</h1>

      <fwb-accordion :open-first-item="false" class="py-4">
        <fwb-accordion-panel>
          <fwb-accordion-header><h4>Office of the Vice President for Research, Scholarship, and Creative Endevors</h4></fwb-accordion-header>
          <fwb-accordion-content>
            <div class="text-gray-500 dark:text-gray-400">
              <p>
              <em>Role: Lead Developer</em><br>
              <em>Project Type: Ground-Up Website Rebuild</em><br>
              <a href="https://research.utexas.edu" target="_blank"><em>Visit site</em></a>
              </p>
              
              <p>
                <strong>Overview</strong><br>
                I served as the lead developer on the redesign and redevelopment of the UT Austin Research website, a critical platform showcasing the university's research initiatives, resources, and innovations. Collaborating closely with a design firm that provided detailed mockups, I spearheaded the transformation of the site from concept to completion.
              </p>
              <p>
                <strong>Responsibilities</strong><br>
                Custom Development: Built a scalable, performant website architecture tailored to meet the unique needs of the client, implementing the designs provided by the design firm with pixel-perfect accuracy.<br>
                Technology Stack: Leveraged a robust tech stack, including Drupal CMS, custom PHP modules, and modern front-end frameworks for a dynamic, responsive user experience.<br>
                Content Management Workflow: Developed custom content types and streamlined workflows to enable seamless updates by non-technical users.<br>
                Accessibility Compliance: Ensured adherence to WCAG 2.1 AA standards, integrating accessible design principles into the site's core functionality.<br>
                Performance Optimization: Optimized the website's performance, achieving fast load times and efficient caching for an improved user experience.<br>
              </p>
              
              <p>
                <strong>Challenges & Solutions</strong><br>
                Complex Content Relationships: Designed intuitive ways to display rich content, such as research focus areas, funding opportunities, and university partnerships, while maintaining an easily navigable structure.<br>
                Responsive Design: Ensured the website remained fully responsive and functional across a range of devices and screen sizes, maintaining usability for diverse audiences.<br>
                Stakeholder Collaboration: Acted as a liaison between the design firm, university stakeholders, and development team, ensuring the final product met organizational goals and technical requirements.<br>

              </p>
            </div>
          </fwb-accordion-content>
        </fwb-accordion-panel>
      </fwb-accordion>
      <img src="@/assets/images/texas-research.png" >
    </div>
  </section>
</template>

<script setup>
  import {
  FwbAccordion,
  FwbAccordionContent,
  FwbAccordionHeader,
  FwbAccordionPanel,
} from 'flowbite-vue'
</script>
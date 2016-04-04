
    JSON API Endpoint           Response JSON
    =============               =============
    GET /                       API Documentation

    GET /api/profile            {
                                  name: "Bob Kliger",
                                  github_link: 'https://github.com/bkliger',
                                  github_profile_image: "",
                                  current_city: "Berkeley"
                                }

    GET /api/projects           [
                                {
                                proj_name: "Architectural Spec Software" ,
                                proj_type: "Strategic Marketing",
                                industry_sector: "Arch/Eng",
                                proj_desc: "Helped company develop and actionable growth plan. This was done through detailed market sizing and market segmentation. Recommendations included product models and specific sales initiatives."
                                }
                                ]

    DELETE /api/profile/:_id    [
                                {
                                proj_name: "Architectural Spec Software" ,
                                proj_type: "Strategic Marketing",
                                industry_sector: "Arch/Eng",
                                proj_desc: "Helped company develop and actionable growth plan. This was done through detailed market sizing and market segmentation. Recommendations included product models and specific sales initiatives."
                                }
                                ]
    POST /api/profile/projects  [
                                {
                                proj_name: "Architectural Spec Software" ,
                                proj_type: "Strategic Marketing",
                                industry_sector: "Arch/Eng",
                                proj_desc: "Helped company develop and actionable growth plan. This was done through detailed market sizing and market segmentation. Recommendations included product models and specific sales initiatives."
                                }
                                ]

# **Diary Web Application**

## **Table of Contents**

1. [Project Overview](## Project Overview)
2. [Project Goals](## Project Goals)
3. [Timeline](## Timeline)
4. [Resources](## Resources)
5. [Development Process](## Development Process)
6. [Responsive Design](### Responsive Design)
7. [Folder Structure](## Folder Structure)
8. [Style Guide](## Style Guide)
9. [Git Workflow](# Git Workflow)

---

## **Project Overview**

This project focuses on creating a simplified Diary Web Application that includes the following pages:

1. **Home Page / Display Page**: The main page displaying all diary entries.
2. **View & Delete Page**: A page for viewing and deleting specific diary entries.
3. **Edit Page**: A page for editing existing diary entries.
4. **Create Page**: A page for creating new diary entries.

## Project Goals

- **Develop a Streamlined Diary Web Application**: The focus is on creating four core pages: Display, Create, View & Delete, and Edit. These pages will integrate essential components and interactive features to manage diary entries efficiently.
- **Enhance User Engagement**: Implement interactive features like input validation and a rich text editor to enable users to create, view, edit, and delete diary entries seamlessly.
- **Ensure Responsive Design**: The application will adapt to various screen sizes (desktop, tablet, mobile) to maintain functionality and visual appeal across different devices.
- **Enable Data Management**: Users can manage their diary entries through functionalities that store entries locally, ensuring data persistence and usability across sessions.
- **Visualize Application Features**: Use dummy data, images, and icons to simulate a live application, showcasing functionality and aesthetic elements typical of a fully operational web app.

## Timeline

- **Research and Planning**: June 14, 2024
- **Design and Development**: June 14, 2024 - July 05, 2024
- **Optimization and Documentation**: June 30, 2024 - July 05, 2024
- **Deployment**: July 04, 2024

## **Technologies Used**

- **HTML**: For structuring the content.
- **CSS**: For styling and layout.
- **JavaScript**: For interactive elements.

## Development Process

### HTML

- **Semantic Tags**: Use semantic HTML elements (e.g., `<section>`, `<button>`) for improved accessibility and readability.
- **Proper Tag Closure**: Ensure all HTML tags are properly closed to prevent validation errors.

### JavaScript

- **Naming Conventions**: Use camelCase for variables and functions (`myVariable`, `calculateTotal`) and PascalCase for classes (`MyClass`, `UserModel`).
- **Commenting**: Use inline comments sparingly to explain specific lines of code.
- **Function Style**: Prefer named functions for readability and arrow functions for concise syntax.
- **Module Usage**: Utilize ES6 modules for organizing and managing code with `import` and `export`.

### CSS

- **Modular Importing**: Organize styles using `@import` for specific components or sections to maintain clarity and manageability.
- **Global Reset**: Apply a global reset using the universal selector (``) to standardize element sizing (`box-sizing: border-box`) and spacing (`margin: 0`, `padding: 0`).
- **Responsive Units**: Use relative units like `rem` for scalable and flexible layouts.
- **Consistent Styling**: Define a consistent color palette and typography using CSS variables (`-variable-name`) to ensure uniformity throughout the application.
- **Minimalist Design**: Focus on clean and minimalist design principles, avoiding unnecessary styling for improved performance and clarity.

### Responsive Design

- **Media Queries**: Tailor the design to different screen sizes using media queries (`@media`) to adapt layout and styling for desktop, tablet, and mobile devices.

## Folder Structure

The project follows a structured organization to maintain clarity and facilitate development:

- **Assets**: Contains images and icons used in the application.
- **Components**: Includes reusable JavaScript files for various functionalities.
- **Pages**: Holds HTML files representing different pages of the application.
- **Scripts**: Contains JavaScript files responsible for application logic.
- **Styles**: Includes CSS files for styling different components or sections of the application.

## Style Guide

### Typography

- **Fonts**: Use Ubuntu, Share Tech, and Open Sans Semibold for consistent typography throughout the application.

### Color Palette

- **Consistency**: Maintain a consistent color palette using CSS variables to ensure visual coherence and branding.

### Design Elements

- **Borders and Shadows**: Define border radius values and border styles for consistent element styling.

### Responsive Guidelines

- **Screen Sizes**: Design and test responsiveness for desktop, tablet, and mobile devices using appropriate media queries.

# **Git Workflow**

## **Git-Flow Branching Strategy**

1. **Overview**
    - The team works using Git/Github, with team members creating local repositories and team leaders creating remote repositories. Team leaders assign tasks for completion by team members.
    - **Main Branch**: The primary container for production code. It is the initial branch checked out locally when someone clones the repository, serving as the base for the production release.
    - **Develop Branch**: Branches off from the Main Branch and serves as a backup. It contains the latest work in progress and represents stable code ready for production.
    - **Feature Branches**: Created off the Develop Branch for specific features. Developers work here until the feature is ready to be merged back into Develop. This keeps the main codebase unaffected by ongoing work.
    - **Release Branch**: Created after development work is completed to prepare for a new production release. This branch is for final testing and bug fixes before merging into the Main Branch.
    - **Bug-fix Branch**: Created from the Release Branch to ensure the upcoming release is stable and free from critical issues.
    - **Hot-fix Branch**: Used to solve critical issues or bugs in the live production version.

## **Git-Flow Processes and Commands**

1. Git/GitHub: 💡 Note: Pay attention to all aspects of the issue (title message, detail description, assigner, reviewer, label, project)
 💡 Note: Everyone should name the branch according to the actual problem and what to do with that branch.
    
    Remote Repository:
    
    - Creating Issue and choosing label:
        
        ⇒ Feature branch:
        
        - Feature-Issue : issue description.
        - Details : describe about the problem in detail
        
        ⇒ Release branch:
        
        - Release-version : release description.
        - Details : describe about the problem in detail
        
        ⇒ Bug-fix branch:
        
        - Bugfix : issue description
        - Details : describe about the problem in detail
        
        ⇒ Hot-fix branch:
        
        - Hotfix : issue description
        - Details : describe about the problem in detail
    - Workspace setup:
        - Assign the one who work on the issue.
        - Set the situation of the issue.
        - Match the project.
        - After finish, assign the reviewer
        - Make a code review.
    
    Local Repository:
    
    - Branching the branch:
        - Name the branch according to the actual problem and what to do with that branch.
        
        ⇒ Feature branch:
        
        - command e.g : git flow feature start nav-bar
            - result of naming : feature/nav-bar
        
        ⇒ Release branch:
        
        - command e.g : git flow release start 1.0
            - result of naming : release/1.0
        
        ⇒ Bug-fix branch:
        
        - command e.g : git flow bugfix start {the actual problem} release/{name of the release branch}
            - result of naming : bugfix/{bugfix branch name}
        
        ⇒ Hot-fix branch:
        
        - command e.g : git flow hotfix start {name of the released version (tag)}, e.g : 1.1
            - result of naming : hotfix/1.1
    - Commit message :
    - 💡 Note: Give a meaningful commit message.
        
        ⇒ file : { describe about the problem in detail, which part you’ve worked on }
        
        - file : add marathon speed ahead.jpeg to men image folder
        
        ⇒ bugfix : { describe about the bug on the pre-release version }
        
        - bugfix : fixed the bug on pre-release version 1.0, error on register user account.
        
        ⇒ hotfix : { describe about the problem in detail, which part you’ve worked on and fixed }
        
        - hotfix : quick fix on released version 1.0, error on popular section in home page
        
        [Figma](https://www.figma.com/design/oMpJpvhYq3xaDLuIlaVHm0/Diary-Web-Application?node-id=187-5436&t=aCA1JNrshGvaC0ST-1)
        
        [Convention Guide](https://www.notion.so/Convention-Dairy-Web-Application-0e89b0b51b324ae7941725983546c308?pvs=21)
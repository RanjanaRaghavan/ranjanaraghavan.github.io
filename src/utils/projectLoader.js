// Utility function to load projects dynamically
export const loadProjects = async () => {
  try {
    // Import all JSON files from the projects directory
    const projectModules = import.meta.glob('../projects/*.json');
    
    const projects = [];
    
    for (const path in projectModules) {
      try {
        const module = await projectModules[path]();
        const project = module.default || module;
        
        // Import screenshot if it exists
        let screenshot = null;
        if (project.screenshotUrl) {
          try {
            const imagePath = project.screenshotUrl.split('/').pop();
            const imageModules = import.meta.glob('../assets/*.png');
            const imagePathKey = `../assets/${imagePath}`;
            
            if (imageModules[imagePathKey]) {
              const imageModule = await imageModules[imagePathKey]();
              screenshot = imageModule.default || imageModule;
            }
          } catch (imageError) {
            console.warn(`Could not load screenshot for ${project.title}:`, imageError);
          }
        }
        
        projects.push({
          ...project,
          screenshot
        });
      } catch (moduleError) {
        console.error(`Error loading project from ${path}:`, moduleError);
      }
    }
    
    // Sort projects by order field
    return projects.sort((a, b) => (a.order || 999) - (b.order || 999));
    
  } catch (error) {
    console.error('Error loading projects:', error);
    return [];
  }
};

// Fallback for webpack (Create React App)
export const loadProjectsWebpack = () => {
  try {
    const projectContext = require.context('../projects', false, /\.json$/);
    const projectFiles = projectContext.keys();
    
    return projectFiles
      .map(filePath => {
        const project = projectContext(filePath);
        let screenshot = null;
        
        if (project.screenshotUrl) {
          try {
            const imagePath = project.screenshotUrl.split('/').pop();
            screenshot = require(`../assets/${imagePath}`);
          } catch (imageError) {
            console.warn(`Could not load screenshot for ${project.title}:`, imageError);
          }
        }
        
        return {
          ...project,
          screenshot
        };
      })
      .sort((a, b) => (a.order || 999) - (b.order || 999));
  } catch (error) {
    console.error('Error loading projects with webpack:', error);
    return [];
  }
}; 
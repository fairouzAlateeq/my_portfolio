import { useState, useEffect } from 'react';

function Projects() {
  const [activeTab, setActiveTab] = useState('frontend');
  const [readmeContent, setReadmeContent] = useState('');
  const [selectedRepo, setSelectedRepo] = useState('');

  useEffect(() => {
    if (activeTab === 'backend' && selectedRepo) {
      fetch(`https://raw.githubusercontent.com/fairouzAlateeq/${selectedRepo}/main/README.md`)
        .then((res) => res.text())
        .then((text) => setReadmeContent(text))
        .catch(() => setReadmeContent('Failed to load README preview.'));
    } else {
      setReadmeContent('');
    }
  }, [activeTab, selectedRepo]);

  const renderProjects = () => {
    switch (activeTab) {
      case 'frontend':
        return (
          <div>
            <ul>
              <li><a href="https://weatherappbyfai.netlify.app/" target="_blank" rel="noopener noreferrer">Weather App ☁️</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">Food Ordering App 🍔 (Coming Soon)</a></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer">This Portfolio 💻 (You're on it!)</a></li>
            </ul>
          </div>
        );
      case 'backend':
        return (
          <div>
            <ul>
            <li><a href="https://github.com/fairouzAlateeq/CapstoneThree_EasyShop" onClick={() => setSelectedRepo('CapstoneThree_EasyShop')}>🛍 Easy Shop</a></li>
              <li><a href="https://github.com/fairouzAlateeq/Workshop8_Dealership_OOP_DB" onClick={() => setSelectedRepo('WorkshopFour_CarDealership')}>🚗 Car Dealership</a></li>
              <li><a href="https://github.com/fairouzAlateeq/CapstoneOne_AccountingLedger" onClick={() => setSelectedRepo('CapstoneOne_AccountingLedger')}>📒 Accounting Ledger</a></li>
              <li><a href="https://github.com/fairouzAlateeq/CapstoneTwo_TheDeli" onClick={() => setSelectedRepo('CapstoneTwo_TheDeli')}>🥪 The Deli</a></li>
            </ul>
            {selectedRepo && (
              <div className="readme-preview">
                <h3>README Preview ({selectedRepo.replace(/_/g, ' ')})</h3>
                <pre style={{ whiteSpace: 'pre-wrap', textAlign: 'left', backgroundColor: '#111', padding: '1rem', borderRadius: '10px', fontSize: '0.6rem', color: '#00ff00' }}>{readmeContent}</pre>
              </div>
            )}
          </div>
        );
      case 'cloud':
        return (
          
          <div className="cloud-projects">
          <div className="cloud-project">
            <h3>AWS Infrastructure Provisioning with Terraform</h3>
            <iframe
              src="/src/write-ups/AWS_Infrastructure_Provisioning_with_Terraform.pdf"
              title="AWS Infrastructure"
              width="100%"
              height="400px"
              style={{ border: '2px dashed #fff', marginBottom: '1rem' }}
            ></iframe>
            <a href="/write-ups/aws_infrastructur_provisioning_with_terraform.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              Open in New Tab
            </a>
          </div>

          <div className="cloud-project">
            <h3>DNS Handler Lambda</h3>
            <iframe
              src="/src/write-ups/dns_handler_lambda.pdf"
              title="DNS Handler Lambda"
              width="100%"
              height="400px"
              style={{ border: '2px dashed #fff', marginBottom: '1rem' }}
            ></iframe>
            <a href="/write-ups/dns_handler_lambda.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              Open in New Tab
            </a>
          </div>

          <div className="cloud-project">
            <h3>Rehydration Lambda for Splunk</h3>
            <iframe
              src="/src/write-ups/rehydration_lambda_for_splunk_services.pdf.pdf"
              title="Rehydration Lambda"
              width="100%"
              height="400px"
              style={{ border: '2px dashed #fff', marginBottom: '1rem' }}
            ></iframe>
            <a href="/write-ups/Rehydration?_lambda_for_splunk_services.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
              Open in New Tab
            </a>
          </div>
        </div>
      );
      case 'databases':
        return (
          <div>
            <iframe
              src="/Fairouz-Database-Design.pdf"
              title="Database Work"
              width="100%"
              height="400px"
              style={{ border: '2px dashed #fff' }}
            ></iframe>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="projects-page">
      <h1>My Projects</h1>

      <div className="tab-buttons">
        <button className={activeTab === 'frontend' ? 'active' : ''} onClick={() => setActiveTab('frontend')}>
          Frontend
        </button>
        <button className={activeTab === 'backend' ? 'active' : ''} onClick={() => setActiveTab('backend')}>
          Backend
        </button>
        <button className={activeTab === 'cloud' ? 'active' : ''} onClick={() => setActiveTab('cloud')}>
          Cloud & IaC
        </button>
        <button className={activeTab === 'databases' ? 'active' : ''} onClick={() => setActiveTab('databases')}>
          Databases
        </button>
      </div>

      <div className="tab-content">{renderProjects()}</div>
    </div>
  );
}

export default Projects;

import { Navigate, useParams } from "react-router-dom";
import CtaBand from "../components/home/CtaBand";
import ProjectDetail from "../components/portfolio/ProjectDetail";
import { getProject } from "../data/portfolioData";

export default function PortfolioDetailPage() {
  const { projectId } = useParams();
  const project = getProject(projectId);

  if (!project) return <Navigate to="/portfolio" replace />;

  return (
    <>
      <ProjectDetail project={project} />
      <CtaBand />
    </>
  );
}

function PageContainer({ children, className = "" }) {
  return <div className={`container-shell ${className}`.trim()}>{children}</div>;
}

export default PageContainer;
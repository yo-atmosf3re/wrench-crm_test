import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => {
   return (
      <ContentLoader
         speed={2}
         width={1052}
         height={45}
         viewBox="0 0 1052 45"
         backgroundColor="#f3f3f3"
         foregroundColor="#ecebeb"
      >
         <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
         <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
         <rect x="3" y="4" rx="10" ry="10" width="650" height="23" />
      </ContentLoader>)
}
import React, { FC, useEffect, useState } from 'react'
import { BlogPosts } from './BlogPosts';
import { BlogDetails } from './BlogDetails';
import { SkeletonLoaderComponent } from './SkeletonLoaderComponent';
import { Keys } from '@/app/util/types';
import { getFacebookImagePosts, getFacebookPageAccessToken } from '@/app/services/facebook-services';
import { useBlogContext } from '@/app/context/blog-context';
import { BlogTypes } from '@/app/context/types/blog';

interface BlogRouterProps {
  keys: Keys
}

export const BlogRouter:FC<BlogRouterProps> = ({ keys }) => {
  const { state, dispatch }: any = useBlogContext();
  const [ pageAccessToken, setPageAccessToken ] = useState<string>();
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const [ error, setError ]= useState<boolean>(false);

  useEffect(() => {
    if (state.keys?.FACEBOOK_PAGE_ID && state.keys?.FACEBOOK_TOKEN) {
      getFacebookPageAccessToken(state?.keys?.FACEBOOK_TOKEN, state.keys.FACEBOOK_PAGE_ID)
        .then(res => setPageAccessToken(res.access_token))
        .catch(error => {
          setError(true)
          setIsLoading(false)
          console.log(error)
        })
    }
  },[state.keys]);

  useEffect(() => {
    if (pageAccessToken) {
      getFacebookImagePosts(pageAccessToken, state.keys.FACEBOOK_PAGE_ID)
        .then(res => {
          dispatch({ type: BlogTypes.SET_FACEBOOK_POSTS, payload: res })
          setIsLoading(false);
        })
        .catch(error => {
          setError(true)
          setIsLoading(false)
          console.log(error)
        });
    }
  },[pageAccessToken])

  useEffect(() => {
    dispatch({ type: BlogTypes.SET_KEYS, payload: keys });
  }, [keys]);
  return (
    <div className="col-lg-9 col-12">
      {
        (state.facebookPostData && !state.facebookPostDetail && !isLoading && !error) && <BlogPosts />
      }
      {
        (state.facebookPostDetail && !isLoading && !error) && <BlogDetails />
      }
      {
        isLoading && <SkeletonLoaderComponent />
      }
      {
        error && <span>Error</span>
      }

    </div>
  )
}

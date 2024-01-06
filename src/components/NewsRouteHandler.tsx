import { useGetNewsLazyQuery } from "@/gql/generated";
import { showModal } from "@/store/newsModal";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

export default function NewsRouteHandler() {
  const { id: newsId } = useParams();
  const [fetchNewsData] = useGetNewsLazyQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchNewsData({
      variables: {
        slug: newsId,
      },
    }).then(({ data }) => {
      if (data?.getNews) {
        dispatch(
          showModal({
            ...data?.getNews,
          })
        );
      }
    });
  }, [newsId]);
}

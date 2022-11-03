import './App.css';
import { UserCard } from './components/UserCard';
import { useAllUsers } from './hooks/useAllUsers';
/**
 * カスタムフック
 * 関数
 * hooksの各機能を使用
 * コンポーネントからロジックを分離
 * 使い回し、テスト容易性、見通しが良くなる
 * 自由に作れる use~という名前にする
 */
function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers()

  const onClickFetchUser = () => {
    getUsers()
  }
  return (
    <div className="">
      <button onClick={onClickFetchUser}>ユーザー情報取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>エラーあり</p>
      ) : loading ? (
        <p>ローディング</p>
      ) : (
        <>
          {
            userProfiles.map((user) => (
              <UserCard key={user.id} user={user}></UserCard>
            ))
          }
        </>
      )
      }

    </div >
  );
}

export default App;

//创建函数式组件

function Header() {
  return <p>头部内容</p>;
}
function Body() {
  return <p>主体内容</p>;
}
function Footer() {
  return <p>尾部内容</p>;
}

const Test = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
export default Test;

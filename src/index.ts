function getCollapseAndExpandContainerFn(element: HTMLElement) {
  /* NOTE 折叠/收起动画 由于参数数量是动态配置的, 无法用纯cssq确定容器固定height的动画效果
    因此使用js动态计算容器高度确保动画生效
  */
  const collapseContainer = () => {
    // 双RAF确保动画效果
    requestAnimationFrame(() => {
      // 第一个raf设置初始高度
      element!.style.height = `${element!.scrollHeight}px`;
      element!.style.opacity = '1';
      requestAnimationFrame(() => {
        element!.style.height = '0px';
        element!.style.opacity = '0';
      });
    });
  };

  const expandContainer = () => {
    element!.style.height = `${element!.scrollHeight}px`;
    element!.style.opacity = '1';

    const handleTransitionend = () => {
      // 展开后移除transitionend事件, 确保不会重复注册
      element!.removeEventListener('transitionend', handleTransitionend);

      element!.style.height = 'auto';
    };

    element!.addEventListener('transitionend', handleTransitionend);
  };

  return { collapseContainer, expandContainer };
}

export { getCollapseAndExpandContainerFn };

function getChildIndex(child: SceneNode) {

    let parent = child.parent;
    let siblings = parent.children;
    let index = siblings.indexOf(child) + 1;
    return index;

}
function getChildIndex(child: SceneNode, context?) {

    let parent = child.parent;
    let siblings = parent.children;
    let index = siblings.indexOf(child) + 1;
    return index;

}

go.getChildIndex = function() {
    let sel = getSelection();
    return getChildIndex(sel);
}

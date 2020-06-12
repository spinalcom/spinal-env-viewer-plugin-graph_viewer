/*
 * Copyright 2020 SpinalCom - www.spinalcom.com
 *
 * This file is part of SpinalCore.
 *
 * Please read all of the following terms and conditions
 * of the Free Software license Agreement ("Agreement")
 * carefully.
 *
 * This Agreement is a legally binding contract between
 * the Licensee (as defined below) and SpinalCom that
 * sets forth the terms and conditions that govern your
 * use of the Program. By installing and/or using the
 * Program, you agree to abide by all the terms and
 * conditions stated or referenced herein.
 *
 * If you do not agree to abide by these terms and
 * conditions, do not demonstrate your acceptance and do
 * not install or use the Program.
 * You should have received a copy of the license along
 * with this file. If not, see
 * <http://resources.spinalcom.com/licenses.pdf>.
 */


import {
  spinalContextMenuService,
  SpinalContextApp
} from "spinal-env-viewer-context-menu-service";

class SideBarOpenGraphViewer extends SpinalContextApp {
  constructor() {
    super("Node Inspector Viewer", "Node Inspector Viewer", {
      icon: "workspaces_outline",
      icon_type: "in",
      backgroundColor: "#0000FF",
      fontColor: "#FFFFFF"
    });
  }

  isShown() {
    // if (option.testsFail === true) return Promise.resolve(-1);
    return Promise.resolve(true);
  }

  action(option) {
    console.log(option);

    console.log("action clicked");
    const server_id = spinal.spinalGraphService.getRealNode(option.selectedNode.id.get())._server_id;
    let myWindow = window.open("", "");
    let location = "/html/graph-inspector/?id=" + server_id;
    myWindow.document.location = location;
    myWindow.focus();
  }
}

spinalContextMenuService.registerApp("GraphManagerSideBar", new SideBarOpenGraphViewer(), [7]);


class CircularMenuOpenGraphViewer extends SpinalContextApp {
  constructor() {
    super("Node Inspector Viewer", "Node Inspector Viewer", {
      icon: "workspaces_outline",
      icon_type: "in",
      backgroundColor: "#0000FF",
      fontColor: "#FFFFFF"
    });
  }

  isShown(option) {
    if (option.exist === false) return Promise.resolve(-1);
    return Promise.resolve(true);
  }

  action(option) {
    console.log("action clicked");
    const server_id = spinal.spinalGraphService.getRealNode(option.selectedNode.id.get())._server_id;
    let myWindow = window.open("", "");
    let location = "/html/graph-inspector/?id=" + server_id;
    myWindow.document.location = location;
    myWindow.focus();
  }
}

spinalContextMenuService.registerApp("circularMenu", new CircularMenuOpenGraphViewer(), [7]);
